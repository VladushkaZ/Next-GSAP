// lib/features/timerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  seconds: number;
  isRunning: boolean;
}

const initialState: TimerState = {
  seconds: 3600,
  isRunning: true,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    tick: (state) => {
      if (state.seconds > 0) {
        state.seconds -= 1;
      } else {
        state.isRunning = false;
      }
    },
  },
});

export const { tick } = timerSlice.actions;
export default timerSlice.reducer;
