const NODE_ENV = process.env.NODE_ENV || 'development'

const REDACTED = `REDACTED`

export const config = {
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'http://localhost',

  githubClientId: process.env.GITHUB_CLIENT_ID || REDACTED,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || REDACTED,

  currentEndpoint: process.env.CURRENT_ENDPOint || 'http://localhost:4000',
  originEndpoint: process.env.ORIGIN_ENDPOINT || 'http://localhost:3000',

  secretPassword: process.env.SECRET_PASSWORD || REDACTED,
  refreshCookieName: process.env.REFRESH_COOKIE_NAME || 'jid',
  accessCookieName: process.env.ACCESS_COOKIE_NAME || 'pid',
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || REDACTED,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || REDACTED,

  emailId: process.env.EMAIL_ID || REDACTED,
  emailPassword: process.env.EMAIL_PASSWORD || REDACTED,

  redisUrl: process.env.REDIS_URL || 'localhost:6379',
  pgUrl: process.env.PG_URL || 'localhost:6379',

  nodeEnv: NODE_ENV,
  isProduction: NODE_ENV === 'production',
  isDevelopment: NODE_ENV !== 'production',
  isTest: NODE_ENV === 'test',
}
