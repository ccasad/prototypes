<?php
class FamilyBaobab extends Baobab {
  // override build function to create the table the way we want it
  public function build() {
    if (parent::build()) { // the table wasn't existing and has been built
      $result = $this->db->query("
        ALTER TABLE {$this->forest_name}
        ADD COLUMN first_name VARCHAR(50) NOT NULL,
        ADD COLUMN last_name VARCHAR(50) NOT NULL
        "
      );
      if (!$result) throw new sp_MySQL_Error($this->db);
    }
  }
}

function get_tree_json($treeLeafs) {
	global $gJson;

	$topNodeId = $treeLeafs->id;
	$topNodeFirstName = $treeLeafs->fields_values['first_name'];
	$topNodeLastName = $treeLeafs->fields_values['last_name'];

	$gJson = '{"id": '.$topNodeId.', "firstname": "'.$topNodeFirstName.'", "lastname": "'.$topNodeLastName.'", "children": [';

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

    $gJson .= '{"id": '.$childNode->id.', "firstname": "'.$childNode->fields_values['first_name'].'", "lastname": "'.$childNode->fields_values['last_name'].'", "children": [';

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
