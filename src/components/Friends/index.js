import React, { Suspense } from 'react';

const Friends = React.lazy(() =>
    !window.isMobile ? import('./Friends') : import('./MobFriends')
);

export default props => (
    <Suspense>
        <Friends {...props} />
    </Suspense>
);
