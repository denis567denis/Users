import { jwtConfiguration } from './jwt';
import { postgresConfiguration } from './postgres';

export const configuration = [postgresConfiguration, jwtConfiguration];
