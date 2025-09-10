export interface TenantCredentials {
    tenantClientId: string;
    tenantSecret: string;
}

export class TenantCredentialsMap {
    [key: string]: TenantCredentials;
}

export const BaseTenantCredentials: TenantCredentials = {
    tenantClientId: '',
    tenantSecret: '',
}