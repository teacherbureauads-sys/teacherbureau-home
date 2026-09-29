import axios from "axios";

const BACKEND_API_BASE_URL = process.env.BACKEND_API_BASE_URL;
const SITE_KEY = "teachersbureau";

if (!BACKEND_API_BASE_URL && typeof window !== "undefined") {
  console.error(
    "[config] BACKEND_API_BASE_URL is not set. Forms and blog/service data will fail."
  );
}

// Common public API URL
const publicApi = (path) =>
  `${BACKEND_API_BASE_URL}/s/${SITE_KEY}/api/public${path}`;

export async function getSinglePost(slug) {
  try {
    const response = await axios({
      method: "GET",
      url: publicApi(`/blog/${slug}`),
    });

    return response?.data?.data;
  } catch (error) {
    console.error(
      "Failed to fetch post:",
      error?.response?.status,
      error?.response?.data || error.message
    );

    throw new Error(`Failed to fetch post: ${error}`);
  }
}

export async function getSingleService(slug) {
  try {
    const response = await axios({
      method: "GET",
      url: publicApi(`/service/${slug}`),
    });

    return response?.data?.data || {};
  } catch (error) {
    console.error(
      "Failed to fetch service:",
      error?.response?.status,
      error?.response?.data || error.message
    );

    throw new Error(`Failed to fetch service: ${error}`);
  }
}

export async function getServiceList() {
  try {
    const response = await axios({
      method: "GET",
      url: publicApi("/service/list"),
    });

    return response?.data?.data || [];
  } catch (error) {
    console.error(
      "Failed to fetch service list:",
      error?.response?.status,
      error?.response?.data || error.message
    );

    throw new Error(`Failed to fetch service list: ${error}`);
  }
}

export async function subscribeNewsletter(payload) {
  try {
    const response = await axios({
      method: "POST",
      data: payload,
      url: publicApi("/news-letter"),
    });

    return response?.data;
  } catch (error) {
    console.error(
      "Newsletter subscribe failed:",
      error?.response?.status,
      error?.response?.data || error.message
    );

    throw new Error(
      error?.response?.data?.error ||
        error?.response?.data?.message ||
        `Failed to subscribe: ${error}`
    );
  }
}

export async function contactSubmit(payload) {
  try {
    const response = await axios({
      method: "POST",
      data: payload,
      url: publicApi("/query"),
    });

    return response?.data;
  } catch (error) {
    console.error(
      "Contact form submit failed:",
      error?.response?.status,
      error?.response?.data || error.message
    );

    throw new Error(
      error?.response?.data?.message ||
        `Failed to submit: ${error}`
    );
  }
}
