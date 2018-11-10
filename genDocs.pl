
$infields=0;
$lastField;
$cnt=0;
$inRel=0;
$lastRel;
$fieldCnt=0;
$lastModel;
%models=();
%picklists=();
while(<>) {

  $line = $_;

  if(/modelService\.models\.([a-z]*)/) {
    $lastModel = $1;
  }
  
  if($infields==0 && /displayName: '([^']*)'/) {
    $entity = $1;
    print "<b>$entity</b><br>";

    $models{$lastModel} = $entity;
    #print "Add $lastModel : $entity<br>";
    #while( my ($name, $hobby) = each %models ) {
    #    print "$name: $hobby";
    #}    
    #exit 1;
  }

  if(/fields:/) {
    $infields=1;
  }

  if(/displayName: '([^']*)'/ && $infields==1) {
    $lastField = $1;
  }

  if(/controlType: '([^']*)'/) {
    $ctrlType = $1;

    if($lastField =~ /Weight/) {
    } else {

      if($fieldCnt==0) {
        print "<i>Properties</i><br><br>";
        print "<ul>";
        $fieldCnt++;
      }
      print "<li>$lastField : $ctrlType</li>";


      if($ctrlType =~ /picklist/) {
        $picklists{$lastField}=1;
        #print "**Add to picklist :$ctrlType: \n";
      }

    }    
  
  }

  if($inRel==0 && /\]/) {

    if(/[a-z]/) {
    } else {
      print "</ul>";
      print "<br>";
      $infields=0;
      $fieldCnt=0;
    }
  }

  if(/relationships/) {
    $inRel=1;
    print "</ul>";
    print "<i>Relationships</i><br>";
    print "<ul>";
  }

  if($inRel==1 && /model: modelService\.models\.([a-z]*)/) {
    $lastRel = $1;

    #print "**find: $lastRel<br><br>";
    #while( my ($name, $hobby) = each %models ) {
    #   print "$name: $hobby<br>";
    #}    

    $fndmodel = $models{$lastRel};
    #print "Found: $fndmodel.length";
    if(length($fndmodel) > 0) {
      $lastRel = $fndmodel;
    }

    #print "**found rel: $lastRel<br>"; 
    #exit 1;
  }

  if($inRel==1 && /destObjectType: (.*)/) {
    $links = $1;
    $links =~ s/[\[\]'V]//ig;
    $links =~ s/,/, /ig;
    chomp($links);
    print "<li>$lastRel : $links </li>";
    $cnt++;
  }

  if($inRel==1 && /\]/) {

    if(/[a-z]/) {
    } else {
      $inRel==0;
      $infields=0;
      $fieldCnt=0;
      print "</ul>";
      print "<br>";
    }
  }

  
  #if($cnt > 5) {
  #  exit 1;  
  #}
  
}

print "Picklists:<br><ul>";

while( my ($name, $hobby) = each %picklists ) {
  print "<li>$name</li>";
}   

print "</ul>";