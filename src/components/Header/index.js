import React, { Suspense } from 'react';

const Header = React.lazy(() =>
    !window.isMobile ? import('./Header') : import('./MobHeader')
);

export default props => (
    <Suspense>
        <Header {...props} />
    </Suspense>
);
