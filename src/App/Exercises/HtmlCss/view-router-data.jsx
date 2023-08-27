import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as ExcerciseExample } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as BoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as HTMLTables } from './HTMLTables/router-data';
import { blockRouterMetaData as TablesTennis } from './TablesTennis/router-data';
import { blockRouterMetaData as ArrayRendering } from './ArrayRendering/router-data';
export const blockRouterMetaData = [
  ExcerciseExample,
  BoxModel,
  HTMLTables,
  TablesTennis,
  ArrayRendering,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
