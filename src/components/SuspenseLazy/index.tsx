import { Spin } from 'antd';
import React, {Suspense, lazy} from 'react';

const SuspenseLazy = (props: any) => {
    return <Suspense fallback={<Spin />}>{React.createElement(lazy(props))}</Suspense>;
};

export default SuspenseLazy;