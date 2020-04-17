class Insan:
    def __init__(self,isim):
        self.isim = isim
    def isimAl(self):
        return self.isim
    def ogrenciMi(self):
        return False

class Ogrenci(Insan):
    def ogrenciMi(self):
        return True

ogrenciJack = Ogrenci("Jack")

insanJohn = Insan("John")

print(issubclass(Insan,Ogrenci))
print(issubclass(Ogrenci,Insan))

print(isinstance(ogrenciJack,Insan))

