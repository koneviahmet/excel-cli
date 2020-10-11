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

> -f 4 konya

4. sutun konya olanları al demek
