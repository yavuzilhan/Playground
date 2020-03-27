class Hayvan: 
    ses=""
    renk=""
    yas=0
    def sesCikar(self):
        print(self.ses)

Zurafa = Hayvan()
Zurafa.yas=45
Zurafa.ses="Python"
Zurafa.renk="Turuncu"

BalPorsugu = Hayvan()
BalPorsugu.ses="Java"
BalPorsugu.renk="Siyah"
BalPorsugu.yas=2

Zurafa.sesCikar()
BalPorsugu.sesCikar()


