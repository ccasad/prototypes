<?php
require 'Baobab/src/baobab.php';
require 'familybaobab.class.inc';

try {

	$conn = new mysqli('localhost', 'root', '', 'family_tree');

	$forestName = "family";

	// Need this line if building a brand new tree and db table needs to be generated
	//build_tree_table($conn, $forestName);

	// get the tree
	$tree = new FamilyBaobab($conn, $forestName, 1);

	$treeLeafs = $tree->getTree();

	$gJson = '';
	$json = get_tree_json($treeLeafs);
	echo $json;

	/*
	$rootId = $tree->appendChild(NULL, array('first_name'=>'Hugo', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Grandma', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg', 'death_date'=>'1950-01-01'));
	    
	$richardId = $tree->appendChild($rootId, array('first_name'=>'Richard', 'short_name'=>'Rich', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Barb', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$williamId = $tree->appendChild($rootId, array('first_name'=>'William', 'short_name'=>'Bill', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Marie', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg', 'death_date'=>'1950-01-01'));
	$robertId = $tree->appendChild($rootId, array('first_name'=>'Robert', 'short_name'=>'Bob', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Mary', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg', 'death_date'=>'1950-01-01'));
	$jerryId = $tree->appendChild($rootId, array('first_name'=>'Gerald', 'short_name'=>'Jerry', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Carol', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$jimId = $tree->appendChild($rootId, array('first_name'=>'James', 'short_name'=>'Jim', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Joyce', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg', 'death_date'=>'1950-01-01'));
	$donId = $tree->appendChild($rootId, array('first_name'=>'Donald', 'short_name'=>'Don', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Mary Ellen', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$carolId = $tree->appendChild($rootId, array('first_name'=>'Carol', 'last_name'=>'Wiesmore', 'maiden_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'Y', 'spouse_name'=>'Harold', 'spouse_gender_mf'=>'M', 'spouse_avatar_src'=>'person0.jpg'));
	$marilynId = $tree->appendChild($rootId, array('first_name'=>'Marilyn', 'last_name'=>'Roberts', 'maiden_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'Y', 'spouse_name'=>'Ron', 'spouse_gender_mf'=>'M', 'spouse_avatar_src'=>'person0.jpg'));
	$bettyId = $tree->appendChild($rootId, array('first_name'=>'Betty', 'last_name'=>'Casad', 'maiden_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'Y', 'spouse_name'=>'Charles', 'spouse_gender_mf'=>'M', 'spouse_avatar_src'=>'person0.jpg', 'death_date'=>'1994-01-06', 'birth_date'=>'1948-11-28'));

	$dougId = $tree->appendChild($richardId, array('first_name'=>'Douglas', 'short_name'=>'Doug', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Karen', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$paulId = $tree->appendChild($richardId, array('first_name'=>'Paul', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'N'));
	$davidId = $tree->appendChild($richardId, array('first_name'=>'David', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'married_yno'=>'N'));
	$danielId = $tree->appendChild($richardId, array('first_name'=>'Daniel', 'short_name'=>'Dan', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Kathy', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$dianeId = $tree->appendChild($richardId, array('first_name'=>'Diane', 'last_name'=>'Flor', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'Y', 'spouse_name'=>'Jeff', 'spouse_gender_mf'=>'M', 'spouse_avatar_src'=>'person0.jpg'));

	$tree->appendChild($dougId, array('first_name'=>'Courtney', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'N'));
	$tree->appendChild($dougId, array('first_name'=>'Heidi', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'N'));
	$tree->appendChild($dianeId, array('first_name'=>'Darcy', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'N'));
	$tree->appendChild($dianeId, array('first_name'=>'Darlene', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'N'));
	$tree->appendChild($dianeId, array('first_name'=>'Donna', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'Y', 'spouse_name'=>'??', 'spouse_gender_mf'=>'M', 'spouse_avatar_src'=>'person0.jpg'));
	$tree->appendChild($danielId, array('first_name'=>'Richard', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'N'));
	
	$williamjrId = $tree->appendChild($williamId, array('first_name'=>'William', 'short_name'=>'Bill', 'last_name'=>'Miller', 'name_suffix'=>'Jr.', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M', 'married_yno'=>'Y', 'spouse_name'=>'Debbie', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$marianneId = $tree->appendChild($williamId, array('first_name'=>'Marianne', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'N'));
	$sandyId = $tree->appendChild($williamId, array('first_name'=>'Sandy', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'O', 'spouse_name'=>'??', 'spouse_gender_mf'=>'F', 'spouse_avatar_src'=>'person0.jpg'));
	$katieId = $tree->appendChild($williamId, array('first_name'=>'Katie', 'last_name'=>'Wanamaker', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F', 'married_yno'=>'Y', 'spouse_name'=>'Jeff', 'spouse_gender_mf'=>'M', 'spouse_avatar_src'=>'person0.jpg'));

	$bobId = $tree->appendChild($robertId, array('first_name'=>'Robert', 'short_name'=>'Bob', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$timId = $tree->appendChild($robertId, array('first_name'=>'Timothy', 'short_name'=>'Tim', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$johnId = $tree->appendChild($robertId, array('first_name'=>'Johnathan', 'short_name'=>'John', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));

	$loriId = $tree->appendChild($jerryId, array('first_name'=>'Lori', 'maiden_name'=>'Miller', 'last_name'=>'Pfentner', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$lisaId = $tree->appendChild($jerryId, array('first_name'=>'Lisa', 'maiden_name'=>'Miller', 'last_name'=>'Bowers', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$shellyId = $tree->appendChild($jerryId, array('first_name'=>'Michelle', 'short_name'=>'Shelly', 'maiden_name'=>'Miller', 'last_name'=>'Boothe', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$mikeId = $tree->appendChild($jerryId, array('first_name'=>'Michael', 'short_name'=>'Mike', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));

	$karenId = $tree->appendChild($jimId, array('first_name'=>'Karen', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$markId = $tree->appendChild($jimId, array('first_name'=>'Mark', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$brianId = $tree->appendChild($jimId, array('first_name'=>'Brian', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));

	$beckyId = $tree->appendChild($donId, array('first_name'=>'Rebecca', 'short_name'=>'Becky', 'maiden_name'=>'Miller', 'last_name'=>'Luchshan', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$jeffId = $tree->appendChild($donId, array('first_name'=>'Jeffrey', 'short_name'=>'Jeff', 'last_name'=>'Miller', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$lauraId = $tree->appendChild($donId, array('first_name'=>'Laura', 'maiden_name'=>'Miller', 'last_name'=>'Coolidge', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));

	$daveId = $tree->appendChild($carolId, array('first_name'=>'David', 'short_name'=>'Dave', 'last_name'=>'Wiesmore', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$ericId = $tree->appendChild($carolId, array('first_name'=>'Eric', 'last_name'=>'Wiesmore', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$haroldId = $tree->appendChild($carolId, array('first_name'=>'Harold', 'last_name'=>'Wiesmore', 'name_suffix'=>'III', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));

	$karenrId = $tree->appendChild($marilynId, array('first_name'=>'Karen', 'last_name'=>'Roberts', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$hermanId = $tree->appendChild($marilynId, array('first_name'=>'Herman', 'last_name'=>'Roberts', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	$tonyId = $tree->appendChild($marilynId, array('first_name'=>'Anthony', 'short_name'=>'Tony', 'last_name'=>'Roberts', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));

	$jenId = $tree->appendChild($bettyId, array('first_name'=>'Jennifer', 'short_name'=>'Jen', 'maiden_name'=>'Casad', 'last_name'=>'Nguyen', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'F'));
	$chrisId = $tree->appendChild($bettyId, array('first_name'=>'Christopher', 'short_name'=>'Chris', 'last_name'=>'Casad', 'avatar_src'=>'person0.jpg', 'gender_mf'=>'M'));
	*/

} catch (Exception $e) {
	die("Error:" . $e->getMessage());
}



