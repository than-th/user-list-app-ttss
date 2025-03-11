const API_URL = 'https://jsonplaceholder.typicode.com/';

export interface ApiError {
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  status: string;
}

//post
const post = async <T>(
  url: string,
  data: object
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return { data: result, status: 'success' };
  } catch (error) {
    throw new Error((error as ApiError).message || 'API request failed');
  }
};

//get
const get = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}${url}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return { data: result, status: 'success' };
  } catch (error) {
    throw new Error((error as ApiError).message || 'API request failed');
  }
};

export { post, get };
