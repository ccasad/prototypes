<?php
class FamilyBaobab extends Baobab {
  // override build function to create the table the way we want it
  public function build() {
    if (parent::build()) { // the table wasn't existing and has been built
      $result = $this->db->query("
        ALTER TABLE {$this->forest_name}
        ADD COLUMN first_name VARCHAR(50),
        ADD COLUMN last_name VARCHAR(50),
        ADD COLUMN middle_name VARCHAR(50),
        ADD COLUMN short_name VARCHAR(50),
        ADD COLUMN maiden_name VARCHAR(50),
        ADD COLUMN name_suffix VARCHAR(20),
        ADD COLUMN gender_mf CHAR(1),
        ADD COLUMN avatar_src VARCHAR(200),
        ADD COLUMN married_yno CHAR(1),
        ADD COLUMN spouse_name VARCHAR(100),
        ADD COLUMN spouse_gender_mf CHAR(1),
        ADD COLUMN spouse_tree_id INT,
        ADD COLUMN spouse_avatar_src VARCHAR(200),
        ADD COLUMN birth_date DATE,
        ADD COLUMN death_date DATE,
        ADD COLUMN address VARCHAR(100),
        ADD COLUMN city VARCHAR(50),
        ADD COLUMN state CHAR(2),
        ADD COLUMN zip CHAR(5),
        ADD COLUMN phone_home VARCHAR(20),
        ADD COLUMN phone_mobile VARCHAR(20),
        ADD COLUMN phone_work VARCHAR(20),
        ADD COLUMN email VARCHAR(200),
        ADD COLUMN facebook_username VARCHAR(50)
        "
      );
      if (!$result) throw new sp_MySQL_Error($this->db);
    }
  }
}

function get_tree_json($treeLeafs) {
	global $gJson;

	$gJson = <<<EOF
    {"id": {$treeLeafs->id}, 
     "firstname": "{$treeLeafs->fields_values['first_name']}", 
     "lastname": "{$treeLeafs->fields_values['last_name']}", 
     "middlename": "{$treeLeafs->fields_values['middle_name']}",
     "shortname": "{$treeLeafs->fields_values['short_name']}",
     "maidenname": "{$treeLeafs->fields_values['maiden_name']}",
     "namesuffix": "{$treeLeafs->fields_values['name_suffix']}",
     "gendermf": "{$treeLeafs->fields_values['gender_mf']}",
     "avatarsrc": "{$treeLeafs->fields_values['avatar_src']}",
     "marriedyno": "{$treeLeafs->fields_values['married_yno']}",
     "spousename": "{$treeLeafs->fields_values['spouse_name']}",
     "spousegendermf": "{$treeLeafs->fields_values['spouse_gender_mf']}",
     "spousetreeid": "{$treeLeafs->fields_values['spouse_tree_id']}",
     "spouseavatarsrc": "{$treeLeafs->fields_values['spouse_avatar_src']}",
     "birthdate": "{$treeLeafs->fields_values['birth_date']}",
     "deathdate": "{$treeLeafs->fields_values['death_date']}",
     "address": "{$treeLeafs->fields_values['address']}",
     "city": "{$treeLeafs->fields_values['city']}",
     "state": "{$treeLeafs->fields_values['state']}",
     "zip": "{$treeLeafs->fields_values['zip']}",
     "phone_home": "{$treeLeafs->fields_values['phone_home']}",
     "phone_mobile": "{$treeLeafs->fields_values['phone_mobile']}",
     "phone_work": "{$treeLeafs->fields_values['phone_work']}",
     "email": "{$treeLeafs->fields_values['email']}",
     "facebook_username": "{$treeLeafs->fields_values['facebook_username']}",
     "children": [
EOF;

  $familyTree = display_tree($treeLeafs);

  $gJson = str_replace(',]', ']', $gJson);
  $gJson = str_replace(',,', ',', $gJson);
  $gJson = rtrim($gJson, ', ');

  $gJson .= ']}';
  
  return $gJson;
}

function display_tree($nodes, $showStructure=FALSE) {
	global $gJson;

  if ($showStructure) { echo '<ul>'; }
  
  foreach ($nodes->children as $childNode) {
    if ($showStructure) { echo '<li>id='.$childNode->id.' '.$childNode->parentNode->id; }

    /*
    $gJson .= '{"id": '.$childNode->id.', "firstname": "'.$childNode->fields_values['first_name'].'", "lastname": "'.$childNode->fields_values['last_name'].'", "children": [';
    */

    $gJson .= <<<EOF
      {"id": {$childNode->id}, 
       "firstname": "{$childNode->fields_values['first_name']}", 
       "lastname": "{$childNode->fields_values['last_name']}", 
       "shortname": "{$childNode->fields_values['short_name']}",
       "maidenname": "{$childNode->fields_values['maiden_name']}",
       "namesuffix": "{$childNode->fields_values['name_suffix']}",
       "gendermf": "{$childNode->fields_values['gender_mf']}",
       "avatarsrc": "{$childNode->fields_values['avatar_src']}",
       "marriedyno": "{$childNode->fields_values['married_yno']}",
       "spousename": "{$childNode->fields_values['spouse_name']}",
       "spousegendermf": "{$childNode->fields_values['spouse_gender_mf']}",
       "spouseavatarsrc": "{$childNode->fields_values['spouse_avatar_src']}",
       "birthdate": "{$childNode->fields_values['birth_date']}",
       "deathdate": "{$childNode->fields_values['death_date']}",
       "children": [
EOF;

    if (count($childNode->children) > 0) {
      display_tree($childNode, $showStructure);
    }

    $gJson .= ']},';
    
    if ($showStructure) { echo '</li>'; }
  }

  if ($showStructure) { echo '</ul>'; }
}

function build_tree_table($conn, $forestName){
  $tree = new FamilyBaobab($conn, $forestName);
  $tree->destroy(TRUE);
  $tree->build();
}
