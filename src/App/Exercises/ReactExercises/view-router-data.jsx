import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ReactEventsUseStateMetaData } from './ReactEventsUsedState/router-data';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
