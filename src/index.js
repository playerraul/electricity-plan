import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const APPLIANCES = [
    {
        category:'Kitcken', 
        appliances:[
            {name: 'Dish Washer', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOXSURBVGhD7ZldaI5hGMfHHOBkCAnzdYBWOxjiRG2lpNjOOFgthyghR0MpnAgnm/JxZr6KmhPCia+kENKWj8TBSkoy3y2bbX7X7f88Pfcze/f18N6t91//rvv6X9dzP/e/+72f992zogIK+E/o7e0d09PT84QYHFiXYbuWmhv0lyQuag+I37Wuc1pqbkRGwGdJQQADtbaovBthvnEaekAv1tBDuj8II9x8H/wJ38ByyaYfhp3wJVwo2fTjsAu2so550vJrhBvPhj2a0xbSbDrDxX+UGKfUv0y5A/lR6Xk3Mg12aU5bSJP0ubBbsunHpJfB2Dg4KD2Ij9ZG+AJeh6WSTd8EX8HL3G+GZNN3Sm+GU6SFcdhHimEb4YKvhAWhkPXsIA5rR4LEcHakG9rjMhS+H5YRMDrOCCgY+RcIxgjzjYf29JkpyQO1iVaH8fdJEiEZWWmTspC7kjygr1X9iiQPIRq5J8lDwshVSR6CM2JgMc/hOpUcyJ0RA+OncJVKDuThGTGwIPue2qyyZ8RAbj/ja1UeuRFiMVw6VHLDMjehgBZ9tFrhWY074HyrE6OP1kN4SeMvcLrqIzYS5UMCN2xxEwpI3mEnXlB+SHl82An2AuSa8t2qZ2OECX4RHg1E+p4RrX8gI9XK3eEmxkaU1yk/rTyzHRnUmeFG5dZMzGkknRPTRqLcLZxYMDLqjBRzsT0qO23smnKAniq7mP4bkhyQ8mvEwMUt0qok9Qt6D1gjsUGSA1IQRnaZQLxD6HdXqM+C7epdIdkBKf9GGJcwQZuJxDNwgkox0Eqhe/lNdO+ukkDOvxEDEyw3zQqM2+BeWAM3wEb4TTX7neRe4SRBKb3wSuW3lKeN1CjP1oiBSezl2X3VPaDbA6GJ4SS1e0BPG9mq/LzytJE9yqMXd9kZicBklbDRmoi2E/XE+N3t30BPbAQugu+U11mdGBuBFfCj8mrVszdioD7Hmpi4TVJO0BoZsR+CHRo/Joy1OuPIyCdoj3ob33QXA8ZhGYnAdQ8IydekzkgCt+FklbM1gmZ/V683MuEWayJ+SGir1doH1KMdeQvtIHuPcbRoR17DNQzdTkVAy9SI24X+wE28nyVJUPYOexro3mFPAz1TI1Phxf7ITY6otQ+o2/9DrGe/JA/oSzRPvSQPmRrJJwpGwOgwwgU/CO5pFAJZTwNxSEbsERssMOL+Bzko0LwNngyQJ2CFlllAAf8eRUW/AYeEUeQuMAE0AAAAAElFTkSuQmCC"},
            {name: 'Microwave', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPHSURBVGhD7ZhLSFRRGMd9ZJlmUlKUbbIEiQpxUUFUtIiiBwlBBLXIEIIk3UTZYxFU0iKhDHtQtEjMhVS2KOhBQVSgi4JIoqKXi5JalNFD8TH2++58d7hz5+o4OqMeuH/4eb7zP9+553xz75yZMcmXL1++fI2p+vv7U2GaKQQCgSzdelCYGZiX4TexUWLPn2CLVQhBrZrd8MMU2HKH7rsHiqSQb2rkW5UZJPZcrXs/Lo+WJR0zShSwR/ZOez6iEMIUmDdOmKXb8lS0QrKDztiLDd7WbXlqSIUw2Acfxoh23cPIC0Edao262NhG2YC7EPo52CnaNa8QwlTiW+p9hDzNM66Q1dK3hX9a88wqhHYRBKxdIcJK9eNXCBeZTO5cQWK1YxLz5jB/inYjChHR3U2/Gc6BtQ7t8AvBT2fiJrgA78H5SvVCC+yF6TrFU4zPgDJ4BqJHOuRZiJcYj70QknOhCr7reEh4X6AN+tQSr4umkXYXrCSW57yEuBpeQCgXddAv06USVwix3IWfQdua2ArHYCnddE2TC0+CDdAE3cFsbzHeCXdhB4Q9kvS9Hq0U+nm0zvViLiSZ5AaoJ16h9qAidyaUw3WQx+cp3AR5AdZynQxNjRDjYYUQphE/VK8dCjQvfm/2RIiNuQtZI31b+Gc0L36FcBF508rxuBhy1I5JzCuA0OFAHFYI7QJwvv/2qT/8QpiUBdugHqzvRE7hvYJKyNUpniJVjuv98FLnPdahiEJExNvhPpxkaKJ6sRdC8nyogV86bol+F7yF19CptvhyFN+BClgHcmTLe+YivNM0S/Tlx12JLuVZiJcYj/nNLqfWn6BtTZQPpgOwkG7oSxyxHAqroA7+WckDS47cG1BMnKaXsISXsEJkg/JKCkVqDyrmZJMrnyFX4B7IUXsV/yDtctoJmhohxiMKkXz6hbTZasVeyGjLXQitfD41qyf/fChU36xCCN3H71nNM+6O5EOPtStEXKG+WYWIiDeDfEs4zFCqetELYVBOKbmlow5rH6ENK8RLQypkPGhEhWBmwoNxwgndlqcYH7gQkxRWCH/sL2PJOm6MHIXUSqdVO1U0W02B/coXV/tDslwKKYZeMUwUe39DE/zHBZ1lUIMhv7GbNEF+qja6vL+2l0hY5wmtrPfV4dmvfpv25RfrIZhqFeEWA5k6QTZt38ad6n3WtISKddbres9lfYFYXmjx6jQtukhukUlu4TdoSkLFOrMh9LPBKfxSTYsuvdAp5jlv91Hwvo0JEGstgUuO9a9BKbFxp6svX77ipqSk/znT5fk/l7ADAAAAAElFTkSuQmCC"},
            {name: 'Oven', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALcSURBVGhD7ZgxaFNRFIajLUGbUhUnB1uQYsUSB8VNEKybsxTBpbgoKCrqooOC4Ca1oC7qJDjUpaK0g4NoERzEQjeRDoogXUqhCipt4ndu//d8r740QUlfrtwf/p7zn3PJPX/ve8lLCgEBAQEBAf+CarXaDrf4ykql0hUZeQu9BmZOmxEHxJyH/KbZ78ZG3PF4BgycstkzjZB2wB15k+G2E9dpLAd0p1KHmkYI6yl+WK7kD2a5Ec0FR1V7D3usTqxpZJPlNJbgTI78ojmeaeCDpiOgb6q+uhEwbzovMNgRG4IYGdkDK24yQHpZdb+MGMjPwHfwPq0O1fwzkgVvjaC3UW6X9M8IaRv5hGqfYK/WeXezH3JTCehh1Vc3QmOBsE9MfQg1E+zbY3sSzxKTRvph8l3rkup1TyQGi6bUa4O2SVm6mNTEjdK7szR5p3RfliaW4SK1GOj4HiEfgq/gLVobVKt7IotwynLgLjNi1Pso3Z3UxLL0dJYmPSA9maWJ7nIC8+Tu6YKYutlXgn79e4RmV5Qne9SbaoT4NJHHRpD2+LQTllRqzIgWzpog2rG6xwSiPT7YJRFtFulBaftvZukT0nbSKQ33w0fSwzBlhLRI/lK1Wdiv+Ro2cl56TcB+C7AXpowQB9wCAT2iemNGDCw6Bseo2TfJppDXfwMfkO/SniuN9MH4jYD8nOqNG8kDDPbHPUI+CMfhdVpF1fwzkoVgZK0QjBisQfi/jND4SjicF9n/CvHvjVAoSbYEmGfMTVwDNY0YSK/ReN4CtM+MAY2VCfq1jfiETCPgqG/EwD3ishH+LJnwGXi4bUYuws+q2UPcKHraBHHGdN5kjsfQfdUlPFFtTvoF3BtdaxdUHCfYkU1KD7kFLQBmea2ZrkJ7gPwOf8KtWuLeqbopxF/uDcgfhM1akjuYx/0gkQS1CbV/g+JJesnjPK5WS4B5SvBOYr6H0P3wERAQEOAbCoVfw/TMpJGKB2QAAAAASUVORK5CYII="},    
            {name: 'Stove', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMASURBVGhD7ZpBSBRRGMfX0CBhKyiEiiAMukREFN067im6FB4KoQ5dvEgdjG5dKoOoQ0RZQRDkoTx0SchLh4wgqIQwqMSgDkVIGaUYplu/b+bvsuvODMzOuDvJ+8Gf995/v/fN9znzdmU15/hfKRaLnejb3wh4/R3apS2REHcGTWlrBfjGc7RJ4elA7maSTvuXiYa4IW0LhZitCo+EuKvaEh/2t5LgGpr002UHarI7flClRkPgdW2aR98zpF+qa45ht8oNhoAmAifRPPN22ZmBmi4ga+airGCIWWOB8EOWB+tm1KRlCbwWTSvAX6lpBWHxYSyOp4EjeNZIv6xgiKlqhE3H0TSaQAXZ5nejGfQF7ZNtOU6z/o0+MS89AqzPoln0Ae2QHQoxt9AcGiXPFnm1NcJY8W7F/JV8e0P447ue/0T+euZF3/X8R+YzbpblwXrA/DB4fa9CPVhfkV9zI3ZmJnzLS/BUfgvzn77r+YPmM+bRjGzz78lvQ+WN3zY/DF7fjsp/IL3yEz1aBTSChlHpkWB+AL1Gj9E22Zajg/UoGmLuPRIG66PoDRpEG2WHQsxJ9BYNkGetvNobyRKxGyHQHpv2rIm6TjDGuiOZJs4dsU/18Qzqa6xGYHmcEVh+jTBfgQIPXz1E0W0qJXEjC15DKC86lUbYbL8+v6iXuN4YY/qNQF3PDcXut4u6RiwQXCNp4RoxiHGNpI1rxCDGNZI2rhGDGNdI2rhGDGJcI2mzZI2w2b4D7qiXuF4v45LckYaQZiOt6H6jRNHdKiVZI1kiTiP2dw9jSlamoK5ONXJHVjgEvVfwOYbAg9gIUc9h9Iy51dajcsMh6BCyr34yCbWNobzKjYbAPegS++ywPVCCWVvLeyjP3pKrDmhckWeY0fJ9DvA+at2PetBqlRkPNuaVsPQ5wrxL3rjCEkGegvK9tPwm5gufI3cVlhySjVjSxeDfVEgiyLMOBf6nBX6XwpJDsg3oPLpRplNolUISQ66d6LJym/ro4xiq+vu+I/vkcv8AEI2MEBUk/jEAAAAASUVORK5CYII="},
        ]
    },
    {
        category:'Laundry', 
        appliances:[
            {name: 'Clothes dryer', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT1SURBVGhD7ZpPiFVlGMbHUStTVDLKFoqYSQkuRAszFwpBi6hokZQSpYQZaoraIiKKbJSxyP4YWEIhEoouWqQuCqxFi0ijTCVIUkFNM7VJmfJfM/2e7z5n4M455851znfHs/CBh/d877/vfe89c7/vfGeastDR0TELfgvbO0sCavkdfsrlWJdZGzi/WwktLdqocarLzQYOT8kTeR6+AG+x6ZqCkvpRyz1wm+s7DgfbnAbG7+QI5ltVKlBX/6RG5Fyr08B4EQpDrSodqG2ZG1lnVRpyAG0eNhzM1ezLFPJsNDBbRSI/syoNOYA+aYRCVkHdAb/A8VYHMF4HL8GfqGeM1QHoytMIRdzluQIYb7RJtilWBzB+36YAxuVphDlGU8iVynShqPU2qdAJsMMm2VptCmBcultrATwIdzDnSKsD0C2Hv8HP4QirAxiXq5He4nojRUG+4fAmDwujTxohdjgTzEFuRR6GF0JGwPVZuBe2wgdQ5a4htUBs4xohRg20wH8qKSpg/B88Ac9Z1QV0B+CjTlE3iGlMIyR8GP6pQKSwHT7HcAzs+tTRDYL3wzfgIfkLXH+JuNVuPQL/+I2Q7CUY1gPkDjjRpprAfQC+z8CTjj1Ubyx+cRsh0Qo5Iy/DF7nsZ1PdIO52+JXznIJ32pQLfOI1QhLdTlfMWVb3Csx3Azm0KKq4nxHDbMoEPnEaIcFQeEqOyKVWFwJ5boTaICrne1ZnAnu0RlbKCbkLcdW3Ux7INxFegNoR595i2Io3gm0YCcKBBHKS1dFAzo+de4NVKWAr3gjBT9rnG6uigvzjoXCGOQZYXQVsURrZIgfkYo8HMRyLvCM4RAC59nmOmVZVAX2URg7KAfkq3AUvhQjA9TH4IZeT7Z4J7DoRmQrfgfugVn9R2/YPYPILtsIhVUAfpZHuW5Az8Ht4xKoAxiqwlcsn4HT4IGMtgOszfNuhPoSuhymB4VpPWwX0xRpBP6RiDkl06jePy/42awKdO70N/6h45QMfreSruJwMwzaG8Sj4Frxsny0hcTegL9zIQIIF3U5DrE7BfjPhm3Az/BruhBvhUljz1w77QhWB/MSqKqCPcmuFTxsZ7Y+7O8j9mudYaVUV0EdpZLd9ZlgVHcyx2XNknnbGaqRFDsjMP8SiIK+2Kn+FKjo7R1tdBexRGrlXDsjjiMwFqwjI+7jz/2BVCtiKN4JNa0CyuQuLYiyQUgfU2v0q90KrU8BWvBGBBA/JCXka3mZ1YZBrkfNq0R1odQrY4zQikCRZfXXEf7PVvQZ59HOdvAmo+RyPPV4j+OiwIdmufIHIXVd6AvHTYPJ802J1LvCJ14iA390kS56598MJNtUFwpqJWQwvKgfYCns8IsI/biMCvjqM/lFBSD27b+Cy5stK7Dp4eAzudZygn/W6zrnwjd+IQMLBUHusfx2ffENr4RKo95LPIl+B2rIk64T8foWPOFVdwL8xjSQgTt+Odrc1N43Yhd1wAcOrXouIa2wjCYhvhtOZSBtEfVOboG6515Fz4Si79grE900jjcb1RsqGuhvBod3DUoL6nnadXS9QU8B42k7jrCodqG2Na1xtVRoYN9lJ//MRfZteFPqA4d+ucZrVacgRnzY5gj2MX0bOv9akjuehFtjwwgi5zSXnAyedOR1VQEmhPVl9O24a0dulOVCfwkdlIMVrQb3PJXZDU9P/5rqr3CNdeOkAAAAASUVORK5CYII="},
            {name: 'Washing machine', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ+SURBVGhD7ZlJiFRXFIbboU2cQyCOKE4rDckirWbhgCLiQhAVgphFxIVBJaCJiFG3om4cQkQEhSyCooLTwmGhoi6SYDAQCLhQjCQa44SYBMSYbr/vcfphVVdXd6r6vUZ4P3zce84995x7ql+9V1XdUKhQoUKpmpubh8OSlpaWFXliTWvHMeoTCaeR7Cn8ATdz5h489QxxnNpFoguwn2Q9wpWbrEntA3A+XLWLJLfh4zBzl7U9Q5i1KxpZ6pxXqDfzLTHOlVd9yYb/Ifa8yd6vYF8Zu10zhvlSeC0a2Q35NtIdKhopF0nOwZ+wmj93P8YrMa7OyWfts3Gc2kWSGSRV47QZ58Q4Lidfi2fQrkvkmWayMHOXtVH9D0STmCnM3GVt1H2NcDlMAh9mawPftBNjudOyNsq3EQ7aF76Em+5hvMPwo8Rc3w1YD31jW1W5B+XXCAeb5WHhLnwOY2Mplb5YM+Y36PBNbG2UTyMsL+NQz2EH837h64k9GRbBAnhfn2vM+8NOcM8n+toTe1T2jbA0h8O8YFyhzdzLayPccx/jA3gc89sMG6AxYj+Ff2G2diW5D2XbCO63OMRDxm3azEfANfgdVsI7SSBiPhS8rB7B1dY1xu1wHwYlgWWyNsq2EYpvhRssN8IA5j/DZXg7QtqINRv6Cb6H/uzrw+gNYEuElMjaKLtGcDVS/DEk1zj2Ng/EODgJqCLi/OT8H7wb9nJ4xN42n6DxqewaofBseM7SYEbfvP/AkliuKuKOwqEwrWEO3/izwpXK2ijTRnwWXI35fPgb3kgWq4hUXoLeHEoOh+2zZl2YqayNMm3E2+exmK+Ba8lCByKuyXxoQLgS4T8OO8NMFbGZNrIH95GYr4MfkoUORNyH5mMs+euZC9/XYaYyFmXayGa4HHM/Rz0gLHngVRMxw8xH/KRwJcK+ApvCTGUsyrSRxbifgHevIeBdaHosVxVx38HWMK3Rx1z4FoUrFX6VaSMD4RnMC/swXCK0VxJQRcR9BH/B0LDnwTP2lrxvlLVRdo0oih+Ci84JGcP8Iexi3u6Peaz1gm+Iu+8efcwvwbdJQJmIUZk3Mh68/yfPD8aZ4EPyLCQPu1eFrwn8Pu5lNDV8vr/8ayRfc8tlbZRtI4pDfAE+DCeHPQHOuIfxFzgGJ+A6qNMsjY7YKeDeNdqVZB6UfSOKg/ijmtf8wnDpmwh+SPSXxF3wGYyPZdf9eO+ePeGqKGujfBphuQds4FDeuU5CUyy1kWtwCl7A+nC3K2ujfBppFQd7D06D+hUOwo7AuT5lTMlzpD1ZG+XbSKs45ChYBXvBV1+c+x1lZIR1StZG3dNILaLBij+KWxsVjaQyiZnCzF3WRl3SyGgz8Sp16nNUV4qa/sTU7BnCVZ/I5XcPb5e3oNI/LbPAWtZs8x2lLpHQ36iW8+pU/FdyVxO1PojyhQoVKqQaGl4C3RCBx+BIyZAAAAAASUVORK5CYII="},
        ]
    },
    {
        category:'General', 
        appliances:[
            {name: 'Computer', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT1SURBVGhD7ZpPiFVlGMbHUStTVDLKFoqYSQkuRAszFwpBi6hokZQSpYQZaoraIiKKbJSxyP4YWEIhEoouWqQuCqxFi0ijTCVIUkFNM7VJmfJfM/2e7z5n4M455851znfHs/CBh/d877/vfe89c7/vfGeastDR0TELfgvbO0sCavkdfsrlWJdZGzi/WwktLdqocarLzQYOT8kTeR6+AG+x6ZqCkvpRyz1wm+s7DgfbnAbG7+QI5ltVKlBX/6RG5Fyr08B4EQpDrSodqG2ZG1lnVRpyAG0eNhzM1ezLFPJsNDBbRSI/syoNOYA+aYRCVkHdAb/A8VYHMF4HL8GfqGeM1QHoytMIRdzluQIYb7RJtilWBzB+36YAxuVphDlGU8iVynShqPU2qdAJsMMm2VptCmBcultrATwIdzDnSKsD0C2Hv8HP4QirAxiXq5He4nojRUG+4fAmDwujTxohdjgTzEFuRR6GF0JGwPVZuBe2wgdQ5a4htUBs4xohRg20wH8qKSpg/B88Ac9Z1QV0B+CjTlE3iGlMIyR8GP6pQKSwHT7HcAzs+tTRDYL3wzfgIfkLXH+JuNVuPQL/+I2Q7CUY1gPkDjjRpprAfQC+z8CTjj1Ubyx+cRsh0Qo5Iy/DF7nsZ1PdIO52+JXznIJ32pQLfOI1QhLdTlfMWVb3Csx3Azm0KKq4nxHDbMoEPnEaIcFQeEqOyKVWFwJ5boTaICrne1ZnAnu0RlbKCbkLcdW3Ux7INxFegNoR595i2Io3gm0YCcKBBHKS1dFAzo+de4NVKWAr3gjBT9rnG6uigvzjoXCGOQZYXQVsURrZIgfkYo8HMRyLvCM4RAC59nmOmVZVAX2URg7KAfkq3AUvhQjA9TH4IZeT7Z4J7DoRmQrfgfugVn9R2/YPYPILtsIhVUAfpZHuW5Az8Ht4xKoAxiqwlcsn4HT4IGMtgOszfNuhPoSuhymB4VpPWwX0xRpBP6RiDkl06jePy/42awKdO70N/6h45QMfreSruJwMwzaG8Sj4Frxsny0hcTegL9zIQIIF3U5DrE7BfjPhm3Az/BruhBvhUljz1w77QhWB/MSqKqCPcmuFTxsZ7Y+7O8j9mudYaVUV0EdpZLd9ZlgVHcyx2XNknnbGaqRFDsjMP8SiIK+2Kn+FKjo7R1tdBexRGrlXDsjjiMwFqwjI+7jz/2BVCtiKN4JNa0CyuQuLYiyQUgfU2v0q90KrU8BWvBGBBA/JCXka3mZ1YZBrkfNq0R1odQrY4zQikCRZfXXEf7PVvQZ59HOdvAmo+RyPPV4j+OiwIdmufIHIXVd6AvHTYPJ802J1LvCJ14iA390kS56598MJNtUFwpqJWQwvKgfYCns8IsI/biMCvjqM/lFBSD27b+Cy5stK7Dp4eAzudZygn/W6zrnwjd+IQMLBUHusfx2ffENr4RKo95LPIl+B2rIk64T8foWPOFVdwL8xjSQgTt+Odrc1N43Yhd1wAcOrXouIa2wjCYhvhtOZSBtEfVOboG6515Fz4Si79grE900jjcb1RsqGuhvBod3DUoL6nnadXS9QU8B42k7jrCodqG2Na1xtVRoYN9lJ//MRfZteFPqA4d+ucZrVacgRnzY5gj2MX0bOv9akjuehFtjwwgi5zSXnAyedOR1VQEmhPVl9O24a0dulOVCfwkdlIMVrQb3PJXZDU9P/5rqr3CNdeOkAAAAASUVORK5CYII="},
            {name: 'TV', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ+SURBVGhD7ZlJiFRXFIbboU2cQyCOKE4rDckirWbhgCLiQhAVgphFxIVBJaCJiFG3om4cQkQEhSyCooLTwmGhoi6SYDAQCLhQjCQa44SYBMSYbr/vcfphVVdXd6r6vUZ4P3zce84995x7ql+9V1XdUKhQoUKpmpubh8OSlpaWFXliTWvHMeoTCaeR7Cn8ATdz5h489QxxnNpFoguwn2Q9wpWbrEntA3A+XLWLJLfh4zBzl7U9Q5i1KxpZ6pxXqDfzLTHOlVd9yYb/Ifa8yd6vYF8Zu10zhvlSeC0a2Q35NtIdKhopF0nOwZ+wmj93P8YrMa7OyWfts3Gc2kWSGSRV47QZ58Q4Lidfi2fQrkvkmWayMHOXtVH9D0STmCnM3GVt1H2NcDlMAh9mawPftBNjudOyNsq3EQ7aF76Em+5hvMPwo8Rc3w1YD31jW1W5B+XXCAeb5WHhLnwOY2Mplb5YM+Y36PBNbG2UTyMsL+NQz2EH837h64k9GRbBAnhfn2vM+8NOcM8n+toTe1T2jbA0h8O8YFyhzdzLayPccx/jA3gc89sMG6AxYj+Ff2G2diW5D2XbCO63OMRDxm3azEfANfgdVsI7SSBiPhS8rB7B1dY1xu1wHwYlgWWyNsq2EYpvhRssN8IA5j/DZXg7QtqINRv6Cb6H/uzrw+gNYEuElMjaKLtGcDVS/DEk1zj2Ng/EODgJqCLi/OT8H7wb9nJ4xN42n6DxqewaofBseM7SYEbfvP/AkliuKuKOwqEwrWEO3/izwpXK2ijTRnwWXI35fPgb3kgWq4hUXoLeHEoOh+2zZl2YqayNMm3E2+exmK+Ba8lCByKuyXxoQLgS4T8OO8NMFbGZNrIH95GYr4MfkoUORNyH5mMs+euZC9/XYaYyFmXayGa4HHM/Rz0gLHngVRMxw8xH/KRwJcK+ApvCTGUsyrSRxbifgHevIeBdaHosVxVx38HWMK3Rx1z4FoUrFX6VaSMD4RnMC/swXCK0VxJQRcR9BH/B0LDnwTP2lrxvlLVRdo0oih+Ci84JGcP8Iexi3u6Peaz1gm+Iu+8efcwvwbdJQJmIUZk3Mh68/yfPD8aZ4EPyLCQPu1eFrwn8Pu5lNDV8vr/8ayRfc8tlbZRtI4pDfAE+DCeHPQHOuIfxFzgGJ+A6qNMsjY7YKeDeNdqVZB6UfSOKg/ijmtf8wnDpmwh+SPSXxF3wGYyPZdf9eO+ePeGqKGujfBphuQds4FDeuU5CUyy1kWtwCl7A+nC3K2ujfBppFQd7D06D+hUOwo7AuT5lTMlzpD1ZG+XbSKs45ChYBXvBV1+c+x1lZIR1StZG3dNILaLBij+KWxsVjaQyiZnCzF3WRl3SyGgz8Sp16nNUV4qa/sTU7BnCVZ/I5XcPb5e3oNI/LbPAWtZs8x2lLpHQ36iW8+pU/FdyVxO1PojyhQoVKqQaGl4C3RCBx+BIyZAAAAAASUVORK5CYII="},
            {name:'Hot water system', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARxSURBVGhD7ZlbiFVVHMbHe6Y2lmR3EC+ghoxiloqKSUZWJgY+KEIF8xBSKKJSDymIRhkIIuEwQqgo1bwVFGLgg/UQg2CogfokiD5oF0LJFJ36ff/97a17PCjnzNlnzuT5wcfa6/vO/q+1z23ts05TEXR1dU35F2iPq8/hHPd/jAf0FRoXUm80LqTeaFxIvfF/vJBfaR6mXdSnLoS5Ps5kW9F3mnh38P9E29HLdAf6tPqBiU1AX6BryZRvgfcX+sfdDLyzaA2Hg12m92ASA9AHTOiqJ3edpoP2HdqxtEP8UD22mf5s9BE6rscLjk+iGX5Y7WHwoegbT+Ym2omecXxXOKUfj30FHfP519AKx7WDsQcz8GFP4jx60VFZuM5nKOUtR7WBAdt9EefQeNsVQw19VtJXZqbtYmGghR70bzTZdo+h1jbXPUUzyHYxMEB/BjrhAdfargrUG4JOuvb7touBMeZ7oPM0VV8HqPum65+yVQwMsNsDbbRVVfTkUPucx3jOdvWheHz/0xb2gaT8Ho/xnq3qQdHH0Ax0HYm5jDW9CFF7O63QwtpC2/OVnyK6d/pBM4/SvQBDX0brPaXKoEC6cl+kOVprMe4vKJ5Emlc9rfLgXH3wtEDp/mmk7ZrD+B/6QtpslQ8nX3KRd2lKvqeLFOO+gOInAe0WT6t8OHmtivQ2zEO/Y572tCqDOsso8j1tyfdxkWLcTrQLjfN0Gtw/8LJPQk+6m4O3h35APYtG28pBrpvQKWiUrd6BCbQxGX0YteIvtx3oIlCH86vodUcB9gC8g86voHmOagvjN2sSKUzkZ0cB1pgkSdCkHQX0dfuRQf8rR7WFsfWMXkimERPZ5yigPwz94Vj5TkcB/UfRFcfKNzuqPQzegr5EO9AjtjPwZqKvkX6Xj7CdgbeAa9DN4RY01HaDBn0W3s9aF55Hk2zlINe6MAuV3CIiH4i0Mz/GVg587XPNQz27r7oXDJT+DBWrbGfg3b7zuNJ2gK2LTDf1tO684SjA1kV0Ote6U9Gm3z2hsLZIs1+KHMZ/Hyn0n3AU0D/iKMCamCQJ5N86CujPchTQ3+uo+lD8jMfRQPttB1iD8LRNFHDcfd0YgX53rDz3+4K+9gVuX1fWOao+1NcO++doK8fNtjPwdd/VhrTjPsx2BudMxW9HGzh+wHYGvj5fu5G2UOvv/5MGDbrB+1RfmQvRbFs59D4mW4RK/uOEr43p11CLrRyc/yDZYlRyVx//IbQETbBVGRQ4wGABx5tsZ+Blf3pyvNp2gKUn4Sdn+tp+21FAX+tG+o/VDbTUUYA9HC++JWm1JfWSo/LgRD3bN1RIqKijAGtkkiSQdzoKsMYmSQL5IUcB/WmOUjocBeS6M86g3+6ofDQ511GhA7YDLN2unE7SyLuvG3pbxc664Di3bmDpz9HfkjTy3LYolrZrLydp5K2OyoeTR6PNaAO6Y13Aewp9jNag7B/cFMbXq/IJ2SraO9YF/MnoU9RK3t92Bv40tA2tJO9nuwRNTf8B7Nv73owRl/0AAAAASUVORK5CYII="},
            {name:'Air conditioner', image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATvSURBVGhD7ZlbiFVVGMdHHcfbpEh5gUin6IJdELW0C4XTBQqD5q3rQ0YPJYbUQyIS5WAZQ1iQiXQhULR6KKSMpHoRIiithyDogpQF1oPaFTWxGX//tf97z97nrDOekTmxN80P/rPW+r5v7fWtfdZZZ+09bSkDAwM9/f39e9Df1EsNOR5Er6DznH4ChuccUynI+zBaEiZBu8fGo2glOjs4SgqpjiXHS9F7zvsHion6NPbY8IhjKwEpjyfnL537PZpI+p04xzGVgdzXKnHKjZpZwL5SQDrj0XTUaVMUJvCwcqfcXMqJkNgy5US5y6YopZwIycwkjTmuFyZCtYP6QtXzYCvlRF5H2jnXozuVE+UudBv6Hh1BhR2VdrkmwvDaUreifuVC8U++FNS/Rle4S4B2Ob8jJHQ12uuUArT/RI9SbXdYBvbyTYQU9Kk8gA4mGSXQ/he9RnW2QzOwl3JpfZpkEhL7yeUhlC6z31ByHDG0S/llfwYdQHej25UTpb7sF6J3UXIUyYGtlEtrMglNUp2y7neE+gxXM7CV88ueQmLdaD961aYopZ9Is4xOpGxEJwIXVE1M4AnKuolUljAR/vzixrcU+6okcj5CqdzXaSJvuLHBS68SkO8k9LNz75ZhMRI6QndjX1QFkWsfpSbxBcXYdHbbZawoS8MkBI05TOaYrJQ6sEXXZFlEjkcpletOT2EQjE/buRdNsLl0kJuOLyfRCXSxzYNgPAt9l5vMvWgxzfy6rH1C08l0lpt10GcM/ktQw5d+xOgIP49ymk2yTdN4NVpKnB6D05WzzuH14NQbvDCZGPgOOFSxm2zTnbnL5gLYdzhGG8mtNmfgGof9fcf8ga6VnTKcfhuBfwvFuHCRRhA0BT2E3kQf1Wi7Y/TphedrQfWz0DkHtrl2B2h/YFcGtgV2B2jvsH0Jqh17N9qMwmRHBMbUcsgeSamHBPJg7kS/hwAg5kW7MrDNQmGpCOq9dv13MOhC9BZ6iRyir1vxXYfeRhvRVJsLYL8FvYM2oPBgNcqZwN3T+u5yMwp+LcGr0Lk2RSGunRidMBrugC2BAfV6Rmtar2qW21wAt7benY7Tm5Aeuwpg1yTSf23oh27wl7qVMFAnA2Y7FuyzqwD2rsSdQJfddhXAfqVDArTrNo6WwFi60z8mw4aBt9lVAJfeihxOokLc83YVwD4DZf+3pL7WrtbDYPOQ/hmpE+h0m+vAr51NL6d7iZtscx34b0B697uGuA6bRzkt3C0tq+vR5TYNCfHtSGeki2waEmInEqtD4VybWgMDbGMwrWOxyuYohGnr/djxOq1Gz2MphHUgHdMVfxzdZNfIwvV1t/Lnq6/sioL/fIcGaH9oVxT81zg0QHurXSMPF//G42ig6G6Vgl/P1L86XPF9dkXBr93rL4cr/jG7Rh6u38UAL1A+RRk9O+Uh5jK0Ca2mT+FNegzi9Ou+Ba0kfuhj+v8S7oq+sDqdntEzAP0moGVovk3Dgn5T0R2oqV2vIVwge7tC/Umbm4IuugmfuK82ifvtagridRRKH71PUNxs1/Cgow5zJ3UhoYva1RR00fvZDPoPuWvVQvyN7hqg/bJdw4fOn/s6ulB4zG0W4rWswptAQX29XU1Bl9n0ye9iD9o1fOg8E/Wix9EUm5uG8fWpPEvfFZR1/14+HfRbgPrQffQfY3OEtrZTvSutsNZsJ1cAAAAASUVORK5CYII="},
        ]
    },
]

ReactDOM.render(<App appliances={APPLIANCES} />, document.getElementById('root'));
registerServiceWorker();
