import React, {useEffect, useState} from 'react';
import { CarCalloutArea, CarCalloutButton, CarCalloutContainer, CarCalloutText } from './style';
import { useTranslation } from 'react-i18next';
import { RTDB } from '../../../services/RTDB';
import { child, onValue, update } from 'firebase/database';

interface CarCalloutProps {
  plate: string;
  showCallout: boolean;
}

export function CarCallout({plate, showCallout}: CarCalloutProps) {
  const {t} = useTranslation();
  const [playAlarmSound, setPlayAlarmSound] = useState<boolean>();

  function handleClick() {
    update(child(RTDB.carsReference, plate), {
      playAlarmSound: !playAlarmSound,
    })
  }

  useEffect(() => {
    onValue(child(RTDB.carsReference, plate), snapshot => {
      setPlayAlarmSound(snapshot.val().playAlarmSound);
    })
  }, [plate]);

  return (
    !!showCallout && (
      <CarCalloutContainer onClick={handleClick}>
        <CarCalloutArea>
          <CarCalloutText>{plate}</CarCalloutText>
          <CarCalloutButton>
            <CarCalloutText>
              {playAlarmSound
                ? t('alarm.cancel').toUpperCase()
                : t('alarm.play').toUpperCase()}
            </CarCalloutText>
          </CarCalloutButton>
        </CarCalloutArea>
      </CarCalloutContainer>
    )
  );
}
