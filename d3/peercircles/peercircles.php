<?php
$json = '';

$firstNames = array('Mark', 'Steve', 'John', 'Terence', 'Phillip', 'Harry', 'Lloyd', 'Kristin', 'Melissa', 'Patricia', 'Kimberly', 'Sarah', 'Amanda', 'William', 'Peter');
$lastNames = array('Robinson', 'Martinez', 'Garcia', 'Jackson', 'Anderson', 'Taylor', 'Moore', 'Wilson', 'Miller', 'Davis', 'Brown', 'Jones', 'Williams', 'Johnson', 'Smith');

$domain = array('name' => 'Domain1', 'size' => 10);

$idealNumStudents = 13;
$peerCircleStatus = 1;   // 1=good, 2=toofew, 3=toomany
$peerCircles = array();

for ($i = 1;$i < 200;$i++) {
	// create peer circle
	$peerCircle = array('name' => 'Peer Circle '.$i, 'size' => 10);

	$moderatorCount = 0;
	$studentCount = 0;
	$children = array();
	$numMembers = rand(7, 20);

	for ($j = 1;$j < $numMembers;$j++) {
		// add members to peer circle
		$type = 2;
		if ($j < 3) {
			$type = rand(1, 2);
		}

		if ($type === 1) {
			$moderatorCount++;
		} else {
			$studentCount++;
		}

		$name = $firstNames[rand(0, 14)] . ' ' . $lastNames[rand(0, 14)];
		$member = array('name' => $name, 'size' => 10, 'type' => $type);
		$children[] = $member;
	}
	$peerCircle['children'] = $children;
	$peerCircle['moderatorCount'] = $moderatorCount;
	$peerCircle['studentCount'] = $studentCount;

	if ($studentCount < $idealNumStudents) {
		$peerCircleStatus = 2;
	} else if ($studentCount > $idealNumStudents) {
		$peerCircleStatus = 3;
	}
	$peerCircle['status'] = $peerCircleStatus;

	$peerCircles[] = $peerCircle;
}

$domain['children'] = $peerCircles;

echo json_encode($domain);
