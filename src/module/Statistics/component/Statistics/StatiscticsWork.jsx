import { useEffect, useState } from 'react';
import { getLengthOfSortedPublication, keysOfTypes } from 'service/api-service';
import { StaticticsBox } from './StaticticsBox';
import {
  Wrapper,
  IconActive,
  IconDeleted,
  IconDone,
  IconInProgress,
} from './Statistics.styled';

export const StatiscticsWork = () => {
  const [number, setNumber] = useState({
    pending: '',
    'in progress': '',
    completed: '',
    deleted: '',
  });

  useEffect(() => {
    keysOfTypes.map(type =>
      (async () => {
        const number = await getLengthOfSortedPublication(type);
        return setNumber(pS => ({ ...pS, [type]: number }));
      })()
    );
  }, []);

  return (
    <Wrapper>
      <StaticticsBox
        title={'Активні:'}
        number={number.pending}
        icon={<IconActive />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'У роботі:'}
        number={number['in progress']}
        icon={<IconInProgress />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'Виконані:'}
        number={number.completed}
        icon={<IconDone />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'Видалені:'}
        number={number.deleted}
        icon={<IconDeleted />}
        size={'medium'}
      ></StaticticsBox>
    </Wrapper>
  );
};