import { StateCreator } from "zustand";
import { User } from "../../interfaces/models/User.model";

export interface AuthSlice {
	user: User | null;
	setUser: (user: User) => void;
	logout: () => void;
}

export const createAuthSlice: StateCreator<
	AuthSlice,
	[["zustand/persist", unknown]],
	[],
	AuthSlice
> = (set) => ({
	user: null,
	logout: () => set(() => ({ user: null })),
	setUser: (user) => set(() => ({ user })),
});
