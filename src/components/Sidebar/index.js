import React, { Suspense } from 'react';

const Sidebar = React.lazy(() =>
    !window.isMobile ? import('./Sidebar') : import('./MobSidebar')
);

export default props => (
    <Suspense>
        <Sidebar {...props} />
    </Suspense>
);
