import { useEffect, useState, useContext } from 'react'
import baseAxios from '../utils/request'
import { GlobalContext } from '../contexts/GlobalContext'

export function usePostRequest(options = {}) {
    return useRequest({ method: 'POST', ...options })
}

export function usePutRequest(options = {}) {
    return useRequest({ method: 'PUT', ...options })
}

export function useGetRequest(options = {}) {
    return useRequest({ method: 'GET', ...options })
}

export function useDeleteRequest(options = {}) {
    return useRequest({ method: 'DELETE', ...options })
}

export function useRequest(options = {}) {
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const { token } = useContext(GlobalContext)

    async function request(overrideOptions = {}, sync = false) {
        setLoading(true)

        try {
            const { data } = await baseAxios({
                headers: { Authorization: `Token ${token}` },
                ...options,
                ...overrideOptions,
            })
            if (!sync) setResponse(data)
            return { response: data, success: true }
        } catch (e) {
            setError(e.response || {})
            // if (e.response === undefined) {
            //     showMessage('Проверьте интернет соединение', 'is-danger')
            // } else if (e.response.status >= 500) {
            //     showMessage('Ошибка сервера.', 'is-danger')
            // } else if (e.response.status === 401 && e.response.data.logout) {
            //     signOut(history)
            // }

            return { error: e.response, success: false }
        } finally {
            if (!sync) setLoading(false)
        }
    }

    return { loading, request, error, response, setResponse, setError, setLoading }
}

export function useLoad(options, dependencies = []) {
    const request = useRequest({ method: 'GET', ...options })

    useEffect(() => {
        request.request()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

    return request
}
