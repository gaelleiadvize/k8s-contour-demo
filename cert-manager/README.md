# cert-manager on GKE

DNS must be managed on clouddns

## Install (with helm)

### 1 - install tiller

```$bash
brew install tiller
helm init
```
### 2 - install cert-manager
```$bash
kubectl create namespace cert-manager
```
```$bash
helm install \
--name cert-manager \
--namespace cert-manager \
stable/cert-manager
```
## Cluster Issuer & certificate

deploy cluster issuer (for all namespaces)
```$bash
kubectl apply -f letsencrypt-prod.yaml
```
deploy certificate issuer
```$bash
kubectl apply -f cert-prod.yaml
```

