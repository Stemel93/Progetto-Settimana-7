document.addEventListener("DOMContentLoaded", function () {
    var User = /** @class */ (function () {
        function User(credito, numeroTelefono, nomeUtente) {
            this.credito = 0;
            this.numeroChiamate = 0;
            this.credito = credito;
            this.numeroTelefono = numeroTelefono;
            this.nomeUtente = nomeUtente;
        }
        User.prototype.ricarica = function (unaRicarica) {
            this.credito = this.credito + unaRicarica;
        };
        User.prototype.chiamata = function (minutiDurata) {
            this.numeroChiamate++;
            if ((+minutiDurata / 60 * 0.20) <= this.credito) {
                this.credito -= +minutiDurata / 60 * 0.20;
                this.credito = +this.credito.toFixed(2);
            }
            else {
                alert('fatti una ricarica');
                this.numeroChiamate--;
            }
        };
        User.prototype.numero404 = function (creditoRes) {
            alert("il tuo credito residuo \u00E8: ".concat(creditoRes, " \u20AC"));
        };
        User.prototype.getNumeroChiamate = function () {
            alert("Oggi hai effettuato: ".concat(this.numeroChiamate, " chiamate"));
        };
        User.prototype.azzeraChiamate = function () {
            this.numeroChiamate = 0;
        };
        return User;
    }());
    var FirstUser = new User(0, 3898992774, "Mauro");
    var SecondUser = new User(0, 3335566889, "Alessandro");
    var ThirdUser = new User(0, 3249988777, "Kevin");
    console.log(FirstUser);
    var telefono = document.querySelector("#numero");
    var utenteLoggato = document.querySelector('#utente');
    var dispCredito = document.querySelector('#displayCredito');
    var dieciEuro = document.querySelector("#dieci");
    var ventiEuro = document.querySelector("#venti");
    var cinqueantaEuro = document.querySelector("#cinquanta");
    var centoEuro = document.querySelector("#cento");
    var login = document.querySelector("#login");
    var logout = document.querySelector("#logout");
    var chiamato = document.querySelector("#numeroChiam");
    var secondi = document.querySelector("#secondiChiam");
    var inoltra = document.querySelector("#inoltraChiam");
    var infoChiam = document.querySelector("#infoChiamate");
    var azzera = document.querySelector("#azzeraChiam");
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        login.addEventListener("click", function () {
            if (+telefono.value === FirstUser.numeroTelefono || +telefono.value === SecondUser.numeroTelefono || +telefono.value === ThirdUser.numeroTelefono) {
                dieciEuro.style.display = 'inline-block';
                ventiEuro.style.display = 'inline-block';
                cinqueantaEuro.style.display = 'inline-block';
                centoEuro.style.display = 'inline-block';
                login.style.display = 'none';
                telefono.disabled = true;
                logout.style.display = 'inline-block';
                chiamato.style.display = 'block';
                secondi.style.display = 'block';
                inoltra.style.display = 'block';
                infoChiam.style.display = 'inline-block';
                if (+telefono.value === FirstUser.numeroTelefono) {
                    utenteLoggato.innerText = "".concat(FirstUser.nomeUtente);
                    dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(FirstUser.credito, "\u20AC");
                }
                else if (+telefono.value === SecondUser.numeroTelefono) {
                    utenteLoggato.innerText = "".concat(SecondUser.nomeUtente);
                    dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondUser.credito, "\u20AC");
                }
                else if (+telefono.value === ThirdUser.numeroTelefono) {
                    utenteLoggato.innerText = "".concat(ThirdUser.nomeUtente);
                    dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(ThirdUser.credito, "\u20AC");
                }
            }
            else {
                alert('Non sei nostro cliente');
            }
        });
    }
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        logout.addEventListener("click", function () {
            if (dieciEuro.style.display === 'inline-block') {
                dieciEuro.style.display = 'none';
                ventiEuro.style.display = 'none';
                cinqueantaEuro.style.display = 'none';
                centoEuro.style.display = 'none';
                login.style.display = 'inline-block';
                telefono.disabled = false;
                logout.style.display = 'none';
                chiamato.style.display = 'none';
                secondi.style.display = 'none';
                inoltra.style.display = 'none';
                infoChiam.style.display = 'none';
                azzera.style.display = 'none';
                telefono.value = '';
                utenteLoggato.innerText = '';
                dispCredito.innerText = '';
            }
        });
    }
    dieciEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(10);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(FirstUser.credito, "\u20AC");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(10);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondUser.credito, "\u20AC");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(10);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(ThirdUser.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    ventiEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(20);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(FirstUser.credito, "\u20AC");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(20);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondUser.credito, "\u20AC");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(20);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(ThirdUser.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    cinqueantaEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(50);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(FirstUser.credito, "\u20AC");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(50);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondUser.credito, "\u20AC");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(50);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(ThirdUser.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    centoEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(100);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(FirstUser.credito, "\u20AC");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(100);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondUser.credito, "\u20AC");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(100);
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(ThirdUser.credito, "\u20AC");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    inoltra.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value !== 404) {
            FirstUser.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(FirstUser.credito, "\u20AC");
        }
        else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value !== 404) {
            SecondUser.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(SecondUser.credito, "\u20AC");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value !== 404) {
            ThirdUser.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = "Il tuo credito residuo \u00E8 pari a: ".concat(ThirdUser.credito, "\u20AC");
        }
        else if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value === 404) {
            FirstUser.numero404(FirstUser.credito);
        }
        else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value === 404) {
            SecondUser.numero404(SecondUser.credito);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value === 404) {
            ThirdUser.numero404(ThirdUser.credito);
        }
    });
    infoChiam.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            return FirstUser.getNumeroChiamate();
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            return SecondUser.getNumeroChiamate();
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            return ThirdUser.getNumeroChiamate();
        }
    });
    azzera.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.azzeraChiamate();
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.azzeraChiamate();
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.azzeraChiamate();
        }
    });
});
