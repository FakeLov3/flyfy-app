import React, { Suspense } from 'react';

const isMobile = window.innerWidth < 768;
const Friends = React.lazy(() =>
    !isMobile ? import('./Friends') : import('./MobFriends')
);

export default props => (
    <Suspense>
        <Friends {...props} />
    </Suspense>
);
