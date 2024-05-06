export const requestBody = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID!,
    client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET!
})