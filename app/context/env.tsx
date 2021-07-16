import { createContext } from 'react';
import { EnvInterface } from '../hooks/useEnvDetection';

export const EnvContext = createContext<EnvInterface | null>(null);
