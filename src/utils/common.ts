export const normalized = response => response ? response : []

export const actionObject = (type: string, payload = null) => ({ type, payload })