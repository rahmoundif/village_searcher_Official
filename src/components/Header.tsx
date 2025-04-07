export const Header = () => {
	return (
		<div className="bg-white rounded-xl p-5 flex flex-row justify-between items-center w-full">
			<img src="./src/assets/LogoVilles.png" alt="logo" className="w-30" />
			<nav>
				<ul className="text-base/8">
					<a href="#accueil"><li className="font-bold">Accueil</li></a>
					<a href="#Démographie"><li className="font-bold">Démographie</li></a>
					<a href="#Fun Fact"><li className="font-bold">Fun Fact</li></a>
					<a href="#About"><li className="font-bold">About</li></a>
				</ul>
			</nav>
		</div>
	);
};