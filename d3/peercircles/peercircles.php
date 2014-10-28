<?php
$json = '';

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

		$member = array('name' => 'Member '.$j, 'size' => 10, 'type' => $type);
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
