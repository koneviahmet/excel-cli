# excel-cli
excel dosyalarını text dosyasına dilediğimiz formatta aktarmaya yarar.

## kurulum
> sudo npm i -g

## kullanımı
> excel-cli a.xlsx

## parametreler
> -a

-a parametresi ayraç anlamına gelir. varsayılan olarak , ayracını kullanır

> -a #

şeklinde paramatre girersek , ayracını # ile değiştirir.

>-s

-s parametresi seçilen sutunları gösterir.

> -s 3 2 1

sutunları 3 2 1 şeklinde sıralamış oldu örnek kullanım aşağıdaki gibi olabilir.

> -g 4

-g grupndandırma için kullanılacak 4. sutunu guplandır demek

> excel-cli a.xlsx -a , -s 3 2 1


> -f

filtreleme yani arama için yapacağız

> -f 4 KONYA

4. sutun KONYA olanları al demek

> -add

satırın sonuna ekleme yapmak için bu parametreyi kullanacağız. bu parametre alt parametreler alacak

> -add kelime <eklencek kelime>

satır sonuna herhangi bir kelime eklemek için kullanacağız

> -add sutun 4

sonunda 4 numaralı sutunu ekle demek

> -add md5 4

4 numaralı sutunu alır ve md5 ile şifreler sonra satırın sonuna ekler

> -add left 4 <eklencek kelim>

4 numaralı sutnunu alır önüne kelime ekleyerek yeni satır oluşturur

> -add right 4 <eklenecek kelime>

4 numaralı sutnunu alır sonuna kelime ekleyerek yeni satır oluşturur


> -add center 4 <başa eklenecek kelime> <sona eklenecek kelime>

4 numaralı sutnunu alır başına ve sonuna kelime ekleyerek yeni satır oluşturur
