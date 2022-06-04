const LocalStorageService = (
    function () {
        const _setToken = (accessToken) => {
            localStorage.setItem("access_token", accessToken);
        }
        const _getAccessToken = () => {
            return localStorage.getItem("access_token");
        }
        const _clearToken = () => {
            localStorage.removeItem("access_token");
        }
        const _setAccessToken = (accessToken) => {
            localStorage.setItem("access_token", accessToken);
        }
        const _setRegion = (region) => {
            localStorage.setItem("region", region)
        }
        const _getRegion = () => {
            return localStorage.getItem("region")
        }
        const _clearRegion = () => {
            localStorage.removeItem("region")
        }
        return {
            setToken: _setToken,
            setAccessToken: _setAccessToken,
            getAccessToken: _getAccessToken,
            clearToken: _clearToken,
            setRegion: _setRegion,
            getRegion: _getRegion,
            clearRegion: _clearRegion,

        };
    })();
export default LocalStorageService;