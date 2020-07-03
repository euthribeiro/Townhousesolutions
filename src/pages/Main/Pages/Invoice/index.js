import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Content, Body } from '../../../../components';
import Header from "../../components/Header";
import Accordian from '../../../../components/Accordion';
import styles from './style';
import PDFImage from '../../../../assets/images/pdf.webp';
import { defaultColors } from '../../../../styles';

const data = [
  {
    title: 'Fatura de maio',
    vencimento: '25/05/2020',
    status: 'Pendente',
    statusId: 0,
    link: 'http://townhousesolutions.com.br/fatura?id=00015646515656556',
    arquivo: '00015646515656556.pdf',
  },
  {
    title: 'Fatura de abril',
    vencimento: '25/04/2020',
    status: 'Atraso',
    statusId: 2,
    link: 'http://townhousesolutions.com.br/fatura?id=00015646515656557',
    arquivo: '00015646515656557.pdf',
  },
  {
   title: 'Fatura de março',
   vencimento: '25/03/2020',
   status: 'Pago',
   statusId: 1,
   link: 'http://townhousesolutions.com.br/fatura?id=000156465154651556',
   arquivo: '000156465154651556.pdf',
  },
  {
    title: 'Fatura de fevereiro',
    vencimento: '25/02/2020',
    status: 'Pago',
    statusId: 1,
    link: 'http://townhousesolutions.com.br/fatura?id=00015646515515688',
    arquivo: '00015646515515688.pdf',
  },
  {
    title: 'Fatura de janeiro',
    vencimento: '25/01/2020',
    status: 'Pago',
    statusId: 1,
    link: 'http://townhousesolutions.com.br/fatura?id=00015642351465364',
    arquivo: '00015642351465364.pdf',
  },
  {
    title: 'Fatura de dezembro',
    vencimento: '25/12/2019',
    status: 'Pago',
    statusId: 1,
    link: 'http://townhousesolutions.com.br/fatura?id=00015648946656566',
    arquivo: '00015648946656566.pdf',
  },
  {
    title: 'Fatura de novembro',
    vencimento: '25/11/2019',
    status: 'Pago',
    statusId: 1,
    link: 'http://townhousesolutions.com.br/fatura?id=00165498461321881',
    arquivo: '00165498461321881.pdf',
  },
  {
    title: 'Fatura de outubro',
    vencimento: '25/10/2019',
    status: 'Pago',
    statusId: 1,
    link: 'http://townhousesolutions.com.br/fatura?id=00056454848521111',
    arquivo: '00056454848521111.pdf',
  },
];

function Invoice(props) {

  const renderAccordians = ()=> {
    const items = [];

      data.map((item, index) => {
        items.push(
          <Accordian
            key={`${index}`}
            title={item.title}
            data={data}
            status={item.statusId}
          >
            <View style={styles.item}>
              <View style={styles.viewDescription}>
                <View style={styles.itemDescription}>
                  <Text style={styles.textDescription}>Vencimento</Text>
                  <Text style={styles.textDescription}>{item.vencimento}</Text>
                </View>
                <View style={styles.itemDescription}>
                  <Text style={styles.textDescription}>Status</Text>
                  <Text style={styles.textDescription}>{item.status}</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.9}>
                <View style={styles.viewPDF}>
                  <View style={styles.viewPDFArcquive}>
                    <Image source={PDFImage} style={styles.pdfImage} />
                    <Text style={styles.textArquivo}>{item.arquivo}</Text>
                  </View>
                    <Icon name="md-download" size={20} color={defaultColors.dark} />
                </View>
              </TouchableOpacity>
            </View>
          </Accordian>
        );
      });

    return items;
  }

  return (
    <Container>
      <Header />
      <Content>
        <Body>
          {renderAccordians()}
        </Body>
      </Content>
    </Container>
  );
}

export default Invoice;
