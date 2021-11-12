const accessTokenKey = 'accessToken'
const refreshTokenKey = 'refreshToken'

export function getAccessToken(): string | null {
  return window.localStorage.getItem(accessTokenKey) || null
}

export function setAccessToken(token = ''): void {
  window.localStorage.setItem(accessTokenKey, token)
}

export function getRefreshToken(): string | null {
  return window.localStorage.getItem(refreshTokenKey) || null
}

export function setRefreshToken(token = ''): void {
  window.localStorage.setItem(refreshTokenKey, token)
}

export function removeAllToken(): void {
  window.localStorage.removeItem(accessTokenKey)
  window.localStorage.removeItem(refreshTokenKey)
}
