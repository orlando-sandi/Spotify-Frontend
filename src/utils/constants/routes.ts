type NavBarRoute = {
	to: string;
	label: string;
};
export const routes: NavBarRoute[] = [
	{
		to: "/",
		label: "Home",
	},
	{
		to: "/add-track",
		label: "Add Track",
	},
];
