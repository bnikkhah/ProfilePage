app.factory('projectsService', [function(){
	var projectsList = {
		projects: [
		{
			name:'Jumpstart',
			img:'img/Fotomatic.png'
		},
		{
			name:'Junction',
			img:'img/Junction.png'
		},
		{
			name:'Move',
			img:'img/MOVE.png'
		},
		{
			name:'Newsroom',
			img:'img/Newsroom.png'
		},
		{
			name:'Headlines',
			img:'img/Headlines.png'
		},
		{
			name:'Fotomatic',
			img:'img/Fotomatic.png'
		},
		{
			name:'SecretAgentSupply',
			img:'img/SecretAgentSupply.png'
		},
		{
			name:'TortoiseshellOptics',
			img:'img/TortoiseshellOptics.png'
		}
		]
    };
    return projectsList;
}]);