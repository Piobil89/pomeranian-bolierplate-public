import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ReactEventsUseStateMetaData } from './ReactEventsUsedState/router-data';
import { ReactIfstatmentsMetadata } from './ReactIfStatments/router-data';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactIfStatmentsMoreOrLessMetaData } from './ReactIfStatmentsMoreOrLess/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
  ReactIfstatmentsMetadata,
  ReactIfStatmentsMoreOrLessMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
