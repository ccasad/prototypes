<?php
require 'Baobab/src/baobab.php';
require 'familybaobab.class.inc';

try {

	$conn = new mysqli('localhost', 'root', 'root', 'family_tree');

	$forestName = "family";

	// Need this line if building a brand new tree and db table needs to be generated
	//build_tree_table($conn, $forestName);

	// get the tree
	$tree = new FamilyBaobab($conn, $forestName, -1);

	$treeLeafs = $tree->getTree();

	$gJson = '';
	$json = get_tree_json($treeLeafs);
	echo $json;

	/*
	$tree = new FamilyBaobab($conn, $forestName);

	$rootId = $tree->appendChild(NULL, array('first_name'=>'Hugo', 'last_name'=>'Miller'));
	    
	$richardId = $tree->appendChild($rootId, array('first_name'=>'Richard', 'last_name'=>'Miller'));
	$williamId = $tree->appendChild($rootId, array('first_name'=>'William', 'last_name'=>'Miller'));

	$dougId = $tree->appendChild($richardId, array('first_name'=>'Douglas', 'last_name'=>'Miller'));
	$paulId = $tree->appendChild($richardId, array('first_name'=>'Paul', 'last_name'=>'Miller'));
	$davidId = $tree->appendChild($richardId, array('first_name'=>'David', 'last_name'=>'Miller'));
	$danielId = $tree->appendChild($richardId, array('first_name'=>'Daniel', 'last_name'=>'Miller'));
	$dianeId = $tree->appendChild($richardId, array('first_name'=>'Diane', 'last_name'=>'Flor'));

	$williamjrId = $tree->appendChild($williamId, array('first_name'=>'William', 'last_name'=>'Miller'));
	$marianneId = $tree->appendChild($williamId, array('first_name'=>'Marianne', 'last_name'=>'Miller'));
	$sandyId = $tree->appendChild($williamId, array('first_name'=>'Sandy', 'last_name'=>'Miller'));
	$katieId = $tree->appendChild($williamId, array('first_name'=>'Katie', 'last_name'=>'Wanamaker'));
	
	$tree->appendChild(16, array('first_name'=>'Courtney', 'last_name'=>'Miller'));
	$tree->appendChild(16, array('first_name'=>'Heidi', 'last_name'=>'Miller'));
	$tree->appendChild(20, array('first_name'=>'Darcy', 'last_name'=>'Miller'));
	$tree->appendChild(20, array('first_name'=>'Darlene', 'last_name'=>'Miller'));
	$tree->appendChild(20, array('first_name'=>'Donna', 'last_name'=>'Miller'));
	$tree->appendChild(19, array('first_name'=>'Richard', 'last_name'=>'Miller'));
	*/

	//$parts = $tree->getChildren(13);
  //print_r(json_encode($parts));
  //echo "<br><br>";

  //print_r($tree->export($conn, $forestName, array('id', 'first_name', 'last_name')));
  //echo "<br><br>";

  //$treeLeafs = $tree->getTree();
  //print_r($treeLeafs);
  //echo "<br><br>";

  //$children = $tree->getDescendants(13);
  //print_r($children);
  //echo "<br><br>";
	
} catch (Exception $e) {
	die("Error:" . $e->getMessage());
}



