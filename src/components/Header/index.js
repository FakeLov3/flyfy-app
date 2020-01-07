import React, { Suspense } from 'react';

const isMobile = window.innerWidth < 768;
const Header = React.lazy(() =>
    !isMobile ? import('./Header') : import('./MobHeader')
);

export default props => (
    <Suspense>
        <Header {...props} />
    </Suspense>
);
