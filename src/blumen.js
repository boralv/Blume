// Temporary solution for CORS -> https://cors-anywhere.herokuapp.com/
// var url = 'https://blumlinge2.herokuapp.com/api/smallbouquet/';
// const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
// const blumen = await response.json();

const blumen = [
    {
        "id": 1,
        "name": "Gypsophila weiss",
        "picture": "gypsophila_weiss.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "weiss",
        "species": "NEXT"
    },
    {
        "id": 2,
        "name": "Gypsophila pastell bunt",
        "picture": "gypsophila_pastell bunt.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "pastell bunt",
        "species": "NEXT"
    },
    {
        "id": 3,
        "name": "Limonium Sinensis china red",
        "picture": "limonium_sinensis_china red.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "china red",
        "species": "NEXT"
    },
    {
        "id": 4,
        "name": "Limonium Sinensis zartes violett",
        "picture": "limonium_sinensis_zartes violett.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "zartes violett",
        "species": "NEXT"
    },
    {
        "id": 5,
        "name": "Limonium Sinensis rosa",
        "picture": "limonium_sinensis_rosa.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "rosa",
        "species": "NEXT"
    },
    {
        "id": 6,
        "name": "Limonium Sinensis weiss",
        "picture": "limonium_sinensis_weiss.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "weiss",
        "species": "NEXT"
    },
    {
        "id": 7,
        "name": "Limonium Sinensis blau",
        "picture": "limonium_sinensis_blau.png",
        "price": 3,
        "quantity": 10,
        "type": "basis",
        "color": "blau",
        "species": "NEXT"
    },
    {
        "id": 8,
        "name": "Statizie Limonium  violett",
        "picture": "statizie_limonium_violett.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "violett",
        "species": "NEXT"
    },
    {
        "id": 9,
        "name": "Statizie Limonium  zartes violett",
        "picture": "statizie_limonium_zartes_violett.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "zartes violett",
        "species": "NEXT"
    },
    {
        "id": 10,
        "name": "Statizie Limonium  rosa",
        "picture": "statizie_limonium_rosa.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "rosa",
        "species": "NEXT"
    },
    {
        "id": 11,
        "name": "Statizie Limonium  zartes rosa",
        "picture": "statizie_limonium_zartes_rosa.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "zartes rosa",
        "species": "NEXT"
    },
    {
        "id": 12,
        "name": "Lavendel violett",
        "picture": "lavendel_violett.png",
        "price": 3,
        "quantity": 10,
        "type": "Winziges Extra",
        "color": "violett",
        "species": "NEXT"
    },
    {
        "id": 13,
        "name": "Craspedia gelb",
        "picture": "craspedia_gelb.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "gelb",
        "species": "NEXT"
    },
    {
        "id": 14,
        "name": "Craspedia gebleicht",
        "picture": "craspedia_gebleicht.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "gebleicht",
        "species": "NEXT"
    },
    {
        "id": 15,
        "name": "Agrostis natur",
        "picture": "agrostis_natur.png",
        "price": 3,
        "quantity": 10,
        "type": "Winziges Extra",
        "color": "natur",
        "species": "NEXT"
    },
    {
        "id": 16,
        "name": "Lagurus natur",
        "picture": "lagurus_natur.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "natur",
        "species": "NEXT"
    },
    {
        "id": 17,
        "name": "Lagurus gebleicht",
        "picture": "lagurus_gebleicht.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "gebleicht",
        "species": "NEXT"
    },
    {
        "id": 18,
        "name": "Lagurus grun",
        "picture": "lagurus_grun.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "grun",
        "species": "NEXT"
    },
    {
        "id": 19,
        "name": "Lagurus blau",
        "picture": "lagurus_blau.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "blau",
        "species": "NEXT"
    },
    {
        "id": 20,
        "name": "Phalaris gebleicht",
        "picture": "phalaris_gebleicht.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "gebleicht",
        "species": "NEXT"
    },
    {
        "id": 21,
        "name": "Phalaris grun",
        "picture": "phalaris_grun.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "grun",
        "species": "NEXT"
    },
    {
        "id": 22,
        "name": "Phalaris rosa",
        "picture": "phalaris_rosa.png",
        "price": 3,
        "quantity": 10,
        "type": "Ovales Gras",
        "color": "rosa",
        "species": "NEXT"
    },
    {
        "id": 23,
        "name": "Stypha natur",
        "picture": "stypha_natur.png",
        "price": 3,
        "quantity": 10,
        "type": "Winziges Extra",
        "color": "natur",
        "species": "NEXT"
    },
    {
        "id": 24,
        "name": "Strohblume  gelb",
        "picture": "strohblume_gelb.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "gelb",
        "species": "NEXT"
    },
    {
        "id": 25,
        "name": "Strohblume  rot",
        "picture": "strohblume_rot.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "rot",
        "species": "NEXT"
    },
    {
        "id": 26,
        "name": "Strohblume  violett",
        "picture": "strohblume_violett.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "violett",
        "species": "NEXT"
    },
    {
        "id": 27,
        "name": "Strohblume  weiss",
        "picture": "strohblume_weiss.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "weiss",
        "species": "NEXT"
    },
    {
        "id": 28,
        "name": "Hafer weiss",
        "picture": "hafer_weiss.png",
        "price": 3,
        "quantity": 10,
        "type": "Langes Gras",
        "color": "weiss",
        "species": "NEXT"
    },
    {
        "id": 29,
        "name": "Hafer rosa",
        "picture": "hafer_rosa.png",
        "price": 3,
        "quantity": 10,
        "type": "Langes Gras",
        "color": "rosa",
        "species": "NEXT"
    },
    {
        "id": 30,
        "name": "Eucalypthus natur",
        "picture": "eucalypthus_natur.png",
        "price": 3,
        "quantity": 10,
        "type": "glatt",
        "color": "natur",
        "species": "NEXT"
    },
    {
        "id": 31,
        "name": "Eucalypthus grau",
        "picture": "eucalypthus_grau.png",
        "price": 3,
        "quantity": 10,
        "type": "glatt",
        "color": "grau",
        "species": "NEXT"
    },
    {
        "id": 32,
        "name": "Farn gebleicht",
        "picture": "farn_gebleicht.png",
        "price": 3,
        "quantity": 10,
        "type": "glatt",
        "color": "gebleicht",
        "species": "NEXT"
    },
    {
        "id": 33,
        "name": "Rhodanthe weiss",
        "picture": "rhodanthe_weiss.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "weiss",
        "species": "NEXT"
    },
    {
        "id": 34,
        "name": "Rhodanthe rosa",
        "picture": "rhodanthe_rosa.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "rosa",
        "species": "NEXT"
    },
    {
        "id": 35,
        "name": "Helichrysum Silver white natur weiss",
        "picture": "helichrysum_silver_white_natur_weiss.png",
        "price": 3,
        "quantity": 10,
        "type": "Blume",
        "color": "natur weiss",
        "species": "NEXT"
    },
    {
        "id": 36,
        "name": "Roggen gebleicht",
        "picture": "roggen_gebleicht.png",
        "price": 3,
        "quantity": 10,
        "type": "Langes Gras",
        "color": "gebleicht",
        "species": "NEXT"
    }
]

export { blumen };