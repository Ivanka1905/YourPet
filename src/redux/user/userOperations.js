import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../auth/authOperations';

export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.get('user/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'user/addFavorite',
  async (id, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.post(`/user/favorite/${id}`);
      return data.user.favorite;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFavorite = createAsyncThunk(
  'user/getFavorite',
  async ({ page = 1, query = '' }, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.get(
        `/user/favorite?page=${page}&limit=10&title=${query}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'user/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateInfoUser = createAsyncThunk(
  'user/updateInfoUser',
  async (upDateUser, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to patch user');
      }
      token.set(value);
      const { data } = await axios.patch('/user/update', upDateUser);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (image, { rejectWithValue, getState }) => {
    const formData = new FormData();
    formData.append('avatar', image);
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to patch user');
      }
      token.set(value);
      const { data } = await axios.patch('/user/avatars', image, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePets = createAsyncThunk(
  'user/deletePets',
  async (id, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to patch user');
      }
      token.set(value);
      const { data } = await axios.delete(`/pets/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
