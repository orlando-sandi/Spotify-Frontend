import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./slices/authSlice";
import { persist } from "zustand/middleware";

export const useBoundStore = create<AuthSlice>()(
	persist(
		(...a) => ({
			...createAuthSlice(...a),
		}),
		{ name: "musicalia" }
	)
);
