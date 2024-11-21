import { JwtConfig } from './jwt';
import { PostgresConfig } from './postgres';

export interface Config extends PostgresConfig, JwtConfig {}
