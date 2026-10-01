import { ReactElement } from 'react';
import { FeatureFlags } from '../../../types/featureFlags';
import { getFeatureFlag } from '..';

interface ToggleFeaturesOptions {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export function ToggleFeatures({ off, on, feature }: ToggleFeaturesOptions) {
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
}
