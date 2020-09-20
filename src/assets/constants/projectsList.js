import PYCSDetail from 'assets/images/projects/Pathfinder/detailview.png';
import PYCSHome from 'assets/images/projects/Pathfinder/home.png';
import MMAddMed from 'assets/images/projects/MedManager/addMed.png';
import MMHome from 'assets/images/projects/MedManager/home.png';
import MMResponsive from 'assets/images/projects/MedManager/responsive.png';
import RCAR from 'assets/images/projects/RoyalCityBuildingLens/ar.png';
import RCMap from 'assets/images/projects/RoyalCityBuildingLens/map.png';
import WizardSetupLand from 'assets/images/projects/WizardScorekeeper/setup-landscape.jpg';
import WizardSetupPortrait from 'assets/images/projects/WizardScorekeeper/setup-portrait.jpg';

export const projectsList = [
  {
    title: 'Pathfinder Youth Society Centre Database App',
    description: 'to be written',
    images: [
      {
        src: PYCSHome,
        path: 'assets/images/projects/Pathfinder/home.png',
        alt: 'PYCS Database main database view',
      },
      {
        src: PYCSDetail,
        path: 'assets/images/projects/Pathfinder/detailview.png',
        alt: 'PYCS Database client detail view',
      },
    ],
  },
  {
    title: 'Wizard Scorekeeper',
    description: 'to be written',
    images: [
      {
        src: WizardSetupLand,
        path: 'assets/images/projects/WizardScorekeeper/setup-landscape.jpg',
        alt: 'Wizard Scorekeeper setup activity',
      },
      {
        src: WizardSetupPortrait,
        path: 'assets/images/projects/WizardScorekeeper/setup-portrait.jpg',
        alt: 'Wizard Scorekeeper setup activity',
      },
    ],
  },
  {
    title: 'Royal City Building Lens',
    description: 'to be written',
    images: [
      {
        src: RCMap,
        path: 'assets/images/projects/RoyalCityBuildingLens/map.png',
        alt: 'Map activity',
      },
      {
        src: RCAR,
        path: 'assets/images/projects/RoyalCityBuildingLens/ar.png',
        alt: 'AR activity',
      },
    ],
  },
  {
    title: 'MedManager',
    description: 'to be written',
    images: [
      {
        src: MMHome,
        path: 'assets/images/projects/MedManager/home.png',
        alt: 'MedManager user home screen',
      },
      {
        src: MMResponsive,
        path: 'assets/images/projects/MedManager/responsive.pn',
        alt: 'MedManager on various devices',
      },
      {
        src: MMAddMed,
        path: 'assets/images/projects/MedManager/addMed.png',
        alt: 'MedManager add medication interface',
      },
    ],
  },
];
