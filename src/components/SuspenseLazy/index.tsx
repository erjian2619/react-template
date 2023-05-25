import { Spin } from 'antd';
import React, {Suspense, lazy} from 'react';
import Loading from '../Loading';

const SuspenseLazy = (props: any) => {
    return <Suspense fallback={<Loading />}>{React.createElement(lazy(props))}</Suspense>;
};

export default SuspenseLazy;