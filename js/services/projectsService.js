app.factory('projectsService', [function(){
	var projectsList = {
		projects: [
		{
			name:'Jumpstart',
			img:'img/Jumpstart.png'
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
			name:'SAS',
			img:'img/SecretAgentSupply.png'
		},
		{
			name:'TorOptics',
			img:'img/TortoiseshellOptics.png'
		}
		]
    };
    return projectsList;
}]);