import React, { Suspense } from 'react';

const isMobile = window.innerWidth < 768;
const Sidebar = React.lazy(() =>
    !isMobile ? import('./Sidebar') : import('./MobSidebar')
);

export default props => (
    <Suspense>
        <Sidebar {...props} />
    </Suspense>
);
