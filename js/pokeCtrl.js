angular.module('pokedex')
  .controller('pokeCtrl', function ($scope, pokeServ) {

$scope.number = 'pikachu';

    $scope.pokeData = function (num) {
      pokeServ.getPokemon(num).then(function (response) {
        console.log(response);
        $scope.pokeName = response.name;
        $scope.pokepic = response.sprites.front_shiny;
         $scope.pokeAbilities = response.abilities[0].ability.name;
         $scope.pokeMove1 = response.moves[0].move.name;
         $scope.pokeMove2 = response.moves[1].move.name;
      });
    };
  });
