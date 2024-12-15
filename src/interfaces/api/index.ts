export interface Pagination {
	page: number;
	pageCount: number;
}
export interface PaginatedData<T> {
	data: T[];
	pagination: Pagination;
}

export interface MessageResponse {
	message: string;
}
