import SportsSoccerTwoToneIcon from '@material-ui/icons/SportsSoccerTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import GTranslateTwoToneIcon from '@material-ui/icons/GTranslateTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
// import BlenderTwoToneIcon from '@material-ui/icons/BlenderTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

export const habitCategories = [
  {
    name: 'Sport',
    icon: () => <SportsSoccerTwoToneIcon />,
  },
  {
    name: 'School',
    icon: () => <SchoolTwoToneIcon />,
  },
  {
    name: 'Language',
    icon: () => <GTranslateTwoToneIcon />,
  },
  {
    name: 'Work',
    icon: () => <WorkTwoToneIcon />,
  },
  //   {
  //     name: 'Diet',
  //     icon: () => <BlenderTwoToneIcon />,
  //   },
  {
    name: 'Other',
    icon: () => <AddCircleTwoToneIcon />,
  },
];

export const habitDefaultFrequences = [
  { name: 'Everyday' },
  { name: 'Every other day' },
  { name: 'Every third day' },
  { name: 'Everyday without weekends' },
  { name: 'Custom choices' },
];

export const habitTimeOfClasses = [
  "30min",
  "45min",
  "60min",
  "90min",
  "120min",
];

