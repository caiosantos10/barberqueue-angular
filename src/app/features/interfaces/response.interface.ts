export interface Response<T> {
    content: Array<T>,
    first: boolean,
    last: boolean,
    pageable: {
        pageNumber: number,
        pageSize: number,
    }
}